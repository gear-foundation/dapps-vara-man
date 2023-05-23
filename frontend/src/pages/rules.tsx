import { useState } from 'react'
import { AnimatePresence, motion, wrap } from 'framer-motion'
import { Icons } from '@/components/ui/icons'

export const images = [
  '/images/rules/rules-1.webp',
  '/images/rules/rules-2.webp',
  '/images/rules/rules-3.webp',
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 2200 : -2200,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 2200 : -2200,
      opacity: 0,
    }
  },
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export default function Rules() {
  const [[page, direction], setPage] = useState([0, 0])

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div className="relative grow flex items-center justify-center w-full h-full pt-8 pb-15">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          className="absolute w-full h-full object-contain"
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.25 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              page < images.length - 1 && paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              page > 0 && paginate(-1)
            }
          }}
        />
      </AnimatePresence>
      <div className="absolute top-0 right-0 z-1 grid grid-cols-2 gap-5">
        {page > 0 && (
          <button
            className="col-start-1 group level-mode level-mode--to-right p-2.5 hover:[--from:#16B768]"
            onClick={() => paginate(-1)}
          >
            <span className="before:absolute before:inset-0 before:z-0 before:bg-[#1e1e1e] before:rounded-[8px] group-hover:before:bg-primary before:transition-colors" />
            <Icons.sliderPrev className="relative z-1 w-5 h-5 text-primary group-hover:text-white" />
          </button>
        )}

        {page < images.length - 1 && (
          <button
            className="col-start-2 group level-mode p-2.5 hover:[--from:#16B768]"
            onClick={() => paginate(1)}
          >
            <span className="before:transition-colors before:absolute before:inset-0 before:z-0 before:bg-[#1e1e1e] before:rounded-[8px] group-hover:before:bg-primary" />
            <Icons.sliderNext className="relative z-1 w-5 h-5 text-primary group-hover:text-white transition-colors" />
          </button>
        )}
      </div>
    </div>
  )
}
