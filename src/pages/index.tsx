import { Flex, Button, Stack } from "@chakra-ui/react"
import { Input } from "../components/Form/Input"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form"

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const {errors} = formState

  console.log(errors)

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) =>{
    await new Promise(resolve => setTimeout(resolve, 2000))//2seg aguardando
    console.log(values)
  }

  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxWidth="360px"
        bg="gray.800"
        padding="8"// 8 de espaçamento configurado o chackra que são 32 px x4 e /4 caso seja rem
        borderRadius="8px"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
        >         
          <Stack spacing="4"> 
            <Input name="email" type="email" label="Email"  />
            <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')}/>
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={formState.isSubmitting}
            >
          Entrar </Button> 
      
      </Flex>
    </Flex>
  )
}

//o stack da o espacamento