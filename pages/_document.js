import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export const crispScript = `
window.$crisp=[];window.CRISP_WEBSITE_ID="cbfa35e7-76b1-45ac-9d9b-6aa76541cba5";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
$crisp.push(["safe", true]);
`

export const heapScript = `
  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=t.forceSSL||"https:"===document.location.protocol,a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=(r?"https:":"http:")+"//cdn.heapanalytics.com/js/heap-"+e+".js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(a,n);for(var o=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],c=0;c<p.length;c++)heap[p[c]]=o(p[c])};
  heap.load("103603704",{
    disableTextCapture: true
  });
`

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <title>There — Remote Teams' Home</title>
          <link
            href="https://fonts.googleapis.com/css?family=Alegreya+Sans:800|IBM+Plex+Sans:400,400i,600"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: heapScript }}
          />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: crispScript }}
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
