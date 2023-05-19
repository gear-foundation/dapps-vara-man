import { Button, Input } from '@gear-js/ui'
import { Icons } from '@/components/ui/icons'
import { useApp } from '@/app/context'
import { useForm } from '@mantine/form'
import { initialRegister } from '@/app/consts'
import { hexRequired } from '@/lib/form-validations'

const validate: Record<string, typeof hexRequired> = {
  programId: hexRequired,
}

type HomeRegisterFormProps = BaseComponentProps & {}

export function HomeRegisterForm({ children }: HomeRegisterFormProps) {
  const { isPending } = useApp()
  const form = useForm({
    initialValues: initialRegister,
    validate: validate,
    validateInputOnChange: true,
  })
  const { getInputProps, errors } = form
  const handleSubmit = form.onSubmit((values) => {
    // setLesson({ step: +values.currentStep, programId: values.programId })
  })

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 w-full max-w-[400px] mx-auto"
    >
      <div className="">
        <Input
          placeholder="Substrate address"
          direction="y"
          {...getInputProps('programId')}
        />
      </div>
      <div className="">
        <Input
          placeholder="Nickname"
          direction="y"
          {...getInputProps('programId')}
        />
      </div>
      <div className="flex justify-center">
        <Button
          text="Start game"
          color="primary"
          icon={() => <Icons.gameJoystick className="w-5 h-5 mr-2.5" />}
          type="submit"
          disabled={Object.keys(errors).length > 0 || isPending}
          className="w-full max-w-[206px]"
        />
      </div>
    </form>
  )
}
