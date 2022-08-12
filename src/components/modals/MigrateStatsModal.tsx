import { useState } from 'react'

import { GameStats, StoredGameState } from '../../lib/localStorage'
import { EmigratePanel } from '../stats/EmigratePanel'
import { ImmigratePanel } from '../stats/ImmigratePanel'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export type MigrationStats = {
  statistics: GameStats
  gameState: StoredGameState | null
}

export const MigrateStatsModal = ({ isOpen, handleClose }: Props) => {
  const [isEmigrateVisible, setIsEmigrateVisible] = useState(true)

  return (
    <BaseModal
      title="Transfer your statistics"
      isOpen={isOpen}
      handleClose={handleClose}
    >

      {isEmigrateVisible && <EmigratePanel />}
      {!isEmigrateVisible && <ImmigratePanel />}
    </BaseModal>
  )
}
