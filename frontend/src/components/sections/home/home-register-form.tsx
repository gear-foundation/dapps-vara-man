import { Input } from '@gear-js/ui'
import { Icons } from '@/components/ui/icons'
import { useApp } from '@/app/context/ctx-app'
import { useForm } from '@mantine/form'
import { initialRegister } from '@/app/consts'
import { hexRequired, isExists } from '@/lib/form-validations'
import { useGameMessage } from '@/app/hooks/use-game'
import { cn } from '@/lib/utils'

const validate: Record<string, typeof hexRequired> = {
  wallet: hexRequired,
  nickname: isExists,
}

export function HomeRegisterForm() {
  const { isPending, setIsPending } = useApp()
  const handleMessage = useGameMessage()

  const form = useForm({
    initialValues: initialRegister,
    validate,
    validateInputOnChange: true,
  })
  const { getInputProps, errors, reset } = form

  const onSuccess = () => {
    setIsPending(false)
    reset()
  }
  const onError = () => {
    setIsPending(false)
  }
  const handleSubmit = form.onSubmit((values) => {
    setIsPending(true)
    console.log(values)

    handleMessage(
      {
        RegisterPlayer: {
          name: values.nickname,
          player_address: values.wallet,
        },
      },
      { onSuccess, onError }
    )
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
          {...getInputProps('wallet')}
        />
      </div>
      <div className="">
        <Input
          placeholder="Nickname"
          direction="y"
          {...getInputProps('nickname')}
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={Object.keys(errors).length > 0 || isPending}
          className={cn(
            'btn btn--primary w-full max-w-[205px]',
            isPending && 'btn--loading'
          )}
        >
          {!isPending && <Icons.gameJoystick className="w-5 h-5 mr-2.5" />}

          <span>Start game</span>
        </button>
      </div>
    </form>
  )
}
