import React, { useContext, useEffect, useState } from 'react'
import { XIcon } from 'lucide-react'
import { buttonStyles } from '@gear-js/ui'
import { cn } from '@/app/utils'

import { GameContext } from '@/app/context/ctx-game-score'
import { useLevelMessage } from '@/app/hooks/use-level'

import AvatarIcon from '@/assets/images/game/claim-modal/avatar.png'
import SilverCoinIcon from '@/assets/images/game/silver_coin.svg'
import GoldCoinIcon from '@/assets/images/game/gold_coin.svg'
import TotalCoinsIcon from '@/assets/images/game/claim-modal/total-coins.svg'

import style from './game.module.scss';

type Props = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};


const GameModal = ({ setOpenModal }: Props) => {
    const { onClaimReward, isPending } = useLevelMessage()
    const { silverCoins, goldCoins } = useContext(GameContext);
    const [allTokens, setAllTokens] = useState(0)
    const silverTokens = silverCoins * 1
    const goldTokens = goldCoins * 1

    useEffect(() => {
        setAllTokens(silverTokens + goldTokens)
    }, [])


    const onClickClaimReward = () => {
        onClaimReward(silverCoins, goldCoins)
    }

    return (
        <div className={style.modalContain}>
            <div className={style.modalOverlay}>
                <div className={style.modalContent}>
                    <div className={style.avatar}>
                        <img width={100} src={AvatarIcon} alt="" />
                    </div>
                    <div className={style.close} onClick={() => setOpenModal(false)}>
                        <XIcon />
                    </div>
                    <div className={style.info}>
                        <div className={style.title}>
                            <span className='font-semibold'>Dead mouse,</span>
                            <span className='font-semibold text-[#2BD071]'>Congratulations!</span>
                            <span className='font-extralight'>Your reward</span>

                        </div>
                        <div className={style.total}>
                            <div className={style.coins}>
                                <img src={SilverCoinIcon} width={24} alt="" />
                                <span className='font-semibold'>{silverCoins} x 1 = {silverTokens} </span>
                                <span className='font-extralight'>vara</span>
                            </div>
                            <div className={style.coins}>
                                <img src={GoldCoinIcon} width={24} alt="" />
                                <span className='font-semibold'>{goldCoins} x 1 = {goldTokens} </span>
                                <span className='font-extralight'>vara</span>
                            </div>

                        </div>
                        <div className={style.totalTokens}>
                            <img src={TotalCoinsIcon} alt="" />
                            <div className={style.number}>
                                <span className='font-medium text-[40px]'>{allTokens}</span>
                                <span className='font-light italic text-[16px]'>vara</span>
                            </div>
                        </div>
                        <div className={style.buttons}>
                            <button
                                className={cn(
                                    'btn',
                                    buttonStyles.primary,
                                    isPending && 'btn--loading'
                                )}
                                onClick={onClickClaimReward}
                                disabled={isPending}
                            >
                                <span>Claim reward</span>
                            </button>

                            <button
                                className={cn(
                                    'btn',
                                    buttonStyles.lightGreen
                                )}
                            // onClick={onClose}
                            >
                                <span>Show champions</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default GameModal