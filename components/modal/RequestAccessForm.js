import React, { useContext } from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { useMutation } from 'urql'
import { Formik, Field, Form } from 'formik'

import { ModalContext } from '../modal/Context'
import Space from '../shared/Space'

export const RequestAccessForm = withRouter(
  ({ setOpenState, setEmailState, defaultEmail, router }) => {
    const { subscribed, setSubscribedState } = useContext(ModalContext)
    const [mutation, executeMutation] = useMutation(AddSubscriber)
    const addSubscriberHandler = async ({ fullName, company, email }) => {
      setSubscribedState(true)
      const res = await executeMutation({
        fullName: fullName,
        company: company,
        email: email,
        utmSource: router.query.utm_source,
        utmMedium: router.query.utm_medium,
        utmCampaign: router.query.utm_campaign
      })

      return res
    }
    // const isSubmitted = true
    return (
      <div>
        {subscribed ? (
          <>
            <Title>Reserve your spot.</Title>
            <Subtitle>No marketing or sales emails spam, ever.</Subtitle>
            <Space height={53} />
            <Formik
              initialValues={{
                fullName: '',
                company: '',
                email: defaultEmail
              }}
              onSubmit={async (values, { props, setSubmitting, setErrors }) => {
                const result = await addSubscriberHandler(values)
                setSubmitting(false)

                if (result.error) {
                  setErrors({ email: result.error.message })
                } else {
                  // successful
                }
              }}
              render={({ errors, touched, isSubmitting }) => (
                <Form>
                  <Row>
                    <InputTitle>Your name</InputTitle>
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Type your full name here"
                    />
                  </Row>
                  <Row>
                    <InputTitle>Your team name</InputTitle>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Type your company name here"
                    />
                  </Row>
                  <Row>
                    <InputTitle>Your work email</InputTitle>
                    <Input
                      type="text"
                      name="email"
                      placeholder="Type your email here"
                    />
                  </Row>
                  {errors.email && (
                    <Error>{errors.email.replace('[GraphQL]', '')}</Error>
                  )}
                  <Space height={20} />

                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Request Access'}
                  </Button>
                </Form>
              )}
            />
          </>
        ) : (
          <MessageWrapper>
            <Space height={15} />

            <Title align="center">You’re on the waitlist! 🎉</Title>
            <Subtitle align="center">
              No marketing or sales emails spam, ever.
            </Subtitle>
            <Space height={20} />

            <Center>
              <CloseButton onClick={() => setOpenState(false)}>
                Close
              </CloseButton>
              <Button
                onClick={() =>
                  window.open(
                    'https://twitter.com/intent/tweet?url=https%3A%2F%2Fthere.team&text=I%27m%20on%20the%20waitlist%20of%20@ThereHQ.%20It%27s%20for%20remote%20teams%21%20',
                    'Twitter',
                    'width=600,height=300'
                  )
                }
              >
                Tweet!
              </Button>
            </Center>
          </MessageWrapper>
        )}
      </div>
    )
  }
)

const AddSubscriber = `
mutation(
  $email: String!
  $fullName: String
  $company: String
  $utmSource: String
  $utmMedium: String
  $utmCampaign: String
) {
  addSubscriber(
    email: $email
    fullName: $fullName
    company: $company
    utmSource: $utmSource
    utmMedium: $utmMedium
    utmCampaign: $utmCampaign
    newsletterLevel: PreLaunch
  )
}
`

const Title = styled.h2`
  margin: 0;
  font-family: ${p => p.theme.fontTitle};
  font-style: normal;
  font-weight: 800;
  font-size: 28px;
  line-height: 1.21;
  text-align: ${p => (p.align ? p.align : 'left')};

  color: #000000;
`

const Subtitle = styled.span`
  display: block;
  font-family: ${p => p.theme.fontText};
  font-size: 16px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.31;

  text-align: ${p => (p.align ? p.align : 'left')};

  color: #a8a8a8;
`

const InputTitle = styled.h1`
  margin: 0;
  font-family: ${p => p.theme.fontText};

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.31;

  color: #7b7c83;
`

const Input = styled(Field)`
  display: flex;
  height: 33px;
  width: 100%;
  border: none;
  outline: none;

  font-family: ${p => p.theme.fontText};
  font-size: ${p => p.theme.fontMedium18}px;
  font-style: normal;
  font-weight: normal;
  line-height: 1.33;

  color: rgba(0, 0, 0, 0.9);
  border-bottom: 1px solid #dfdfdf;
  transition: all 300ms;

  ::placeholder {
    color: rgba(0, 0, 0, 0.35);
  }

  :focus {
    border-bottom: 2px solid #999;
  }
`

const Row = styled.div`
  width: 100%;
  margin-bottom: 36px;
`

const Button = styled.button`
  display: block;
  margin: auto;
  border: none;
  width: auto;
  padding: 10px 17px;
  height: 40px;

  background: #438af4;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.19);
  border-radius: 3px;

  font-family: ${p => p.theme.fontText};
  font-size: 16px;
  line-height: 1.31;
  font-style: normal;
  font-weight: 600;

  color: #ffffff;
  cursor: pointer;

  outline: none;
  :hover {
  }
`

const Error = styled.div`
  font-family: ${p => p.theme.fontText};
  font-size: 16px;
  line-height: 1.31;
  font-style: italic;
  font-weight: 600;

  color: #999;
`
const MessageWrapper = styled.div``

const CloseButton = styled.a`
  padding: 10px;
  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.31;

  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    margin: 0;
    margin-left: 10px;
  }
`

/*
  send data to 
https://github.com/morajabi/there/blob/add/homepage/lambdas/subscribers/index.js
https://subscribers.morajabi.now.sh/graphql

*/
