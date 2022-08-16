import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jugar" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
      Tienes 6 intentos para adivinar la palabra.
      Después de cada intento cada celda cambiará según que tan cerca estuviste.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          status="correct"
        />
        <Cell value="H" />
        <Cell value="I" />
        <Cell value="L" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra C está en la palabra y en el lugar correcto.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="F" />
        <Cell value="U" />
        <Cell value="N" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra A está en la palabra pero en el lugar incorrecto.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="C" />
        <Cell value="U" />
        <Cell value="R" />
        <Cell isRevealing={true} isCompleted={true} value="A" status="absent" />
        <Cell value="O" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra A no está en la palabra.
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Weondle es un juego CHILENO basado en el código open-source de Wordle -{' '}
        <a
          href="https://github.com/xannbtw/weondle"
          className="underline font-bold"
        >
          mira el código acá
        </a>{''}
        -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          y el código original acá
        </a>{' '}
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Made by {' '}
        <a
          href="https://github.com/xannbtw/"
          className="underline font-bold"
        >
          XannBTW
        </a>{''}
      </p>
    </BaseModal>
  )
}
