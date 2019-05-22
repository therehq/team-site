import React, { useContext } from 'react'
import { withRouter } from 'next/router'
import styled from 'styled-components'
import { useMutation } from 'urql'
import { Formik, Field, Form } from 'formik'

import { openTwitterModal } from '../../utils/share'
import { ModalContext } from './Context'
import Space from '../shared/Space'
import { MultiSelect } from './MultiSelect'

export const Questioner = withRouter(({ router }) => {
  const { email, questioner, setQuestionerState, setOpenState } = useContext(
    ModalContext
  )
  const [mutation, executeMutation] = useMutation(AddSubscriber)

  const addSubscriberHandler = async ({
    remoteTeam,
    teamSize,
    likelyToBuy
  }) => {
    if (remoteTeam == '' || teamSize == '' || likelyToBuy == '') {
      return { error: { message: 'Looks like you forgot question' } }
    }

    const res = await executeMutation({
      email: email,
      surveyId: 'hwX6aOr7',
      remoteTeam: remoteTeam,
      teamSize: teamSize,
      likelyToBuy: likelyToBuy
    })

    setQuestionerState(true)

    return res
  }

  return (
    <div>
      {!questioner ? (
        <MessageWrapper>
          <Space height={15} />

          <Title align="center">You’re on the waitlist! 🎉</Title>
          <Subtitle align="center">
            Answering these 3 questions will significantly help us.
            <br />
            <SecondaryButton onClick={() => setOpenState(false)}>
              Close
            </SecondaryButton>
          </Subtitle>
          <Separator />
          <Formik
            initialValues={{
              remoteTeam: '',
              teamSize: '',
              likelyToBuy: ''
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
            render={({
              errors,
              touched,
              isSubmitting,
              setFieldValue,
              values
            }) => (
              <Form>
                <InputLabel>
                  Are you a remote team?
                  <MultiSelect
                    options={[
                      'Fully remote',
                      'Mostly remote',
                      'Remote friendly',
                      'Not remote'
                    ]}
                    onChange={e => {
                      setFieldValue('remoteTeam', e)
                    }}
                    value={values.remoteTeam}
                  />
                </InputLabel>
                <Separator />

                <InputLabel>
                  How many people are you?
                  <MultiSelect
                    options={['1-10', '11-50', '51-100', '101-300']}
                    onChange={e => {
                      setFieldValue('teamSize', e)
                    }}
                    value={values.teamSize}
                  />
                </InputLabel>
                <Separator />

                <InputLabel>
                  How likely are you to buy There after trying it?
                  <MultiSelect
                    options={[
                      'Very likely',
                      'Somewhat likely',
                      'Not likely',
                      'Don’t know'
                    ]}
                    onChange={e => {
                      setFieldValue('likelyToBuy', e)
                    }}
                    value={values.likelyToBuy}
                  />
                </InputLabel>
                {errors.email && (
                  <Error>{errors.email.replace('[GraphQL]', '')}</Error>
                )}
                <Center>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Submit'}
                  </Button>
                </Center>
              </Form>
            )}
          />
        </MessageWrapper>
      ) : (
        <MessageWrapper>
          <Space height={15} />

          <Title align="center">Thanks for also answering the questions!</Title>
          <Subtitle align="center">
            You can now close this window, or share it with your friends!
          </Subtitle>
          <Space height={20} />

          <Center>
            <SecondaryButton onClick={() => setOpenState(false)}>
              Close
            </SecondaryButton>
            <Button onClick={() => openTwitterModal()}>Tweet!</Button>
          </Center>
        </MessageWrapper>
      )}
    </div>
  )
})

const AddSubscriber = `#graphql
  mutation(
    $email: String!
    $surveyId: String!
    $remoteTeam: String!
    $teamSize: String!
    $likelyToBuy: String!
  ) {
    addResponses(
      email: $email
      surveyId: $surveyId
      remoteTeam: $remoteTeam
      teamSize: $teamSize
      likelyToBuy: $likelyToBuy
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

export const InputLabel = styled.label`
  margin: 0;
  font-family: ${p => p.theme.fontText};

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.31;

  color: #7b7c83;
`

export const Input = styled(Field)`
  display: flex;
  height: 38px;
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

  :disabled {
    background: rgba(0, 0, 0, 0.06);
    border-radius: 1px;
    color: rgba(0, 0, 0, 0.6);
  }
`

const Row = styled.div`
  width: 100%;
  margin-bottom: 36px;
`

export const Button = styled.button`
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
  position: relative;

  * {
    cursor: pointer;
  }

  outline: none;
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

export const SecondaryButton = styled.button`
  padding: 10px;
  font-family: ${p => p.theme.fontText};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.31;

  background: none;
  border: none;
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

const Separator = styled.div`
  margin-top: 13px;
  margin-bottom: 16px;

  width: 100%;
  height: 0px;

  border: 1px solid rgba(0, 0, 0, 0.08);
`
