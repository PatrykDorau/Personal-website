export const motionGlowText = {
    initial: {
      'text-shadow': '0 0 1px rgba(0, 0, 0, 0)'
    },
    enter: {
      'text-shadow': '0 0 10px rgba(200, 200, 200, 1)',
      transition: {
        duration: 1000,
        repeat: Infinity,
        repeatType: 'reverse',
      }
    }
}

export const motionButtonGlow = {
    initial: {
      'box-shadow': '0 0 1px rgba(0, 0, 0, 0)'
    },
    enter: {
      'box-shadow': '0 0 8px rgba(200, 200, 200, 1)',
      transition: {
        duration: 1000,
        repeat: Infinity,
        repeatType: 'reverse',
      }
    }
}

export const motionAbout = {
    initial: {
      y: -50,
      opacity: 0
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 500,
      }
    },
}
export const motionShake1 = {
    initial: {
      y: -5
    },
    visible: {
      y: 5,
      transition: {
        duration: 2000,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: 250,
      }
    }
}
export const motionShake2 = {
    initial: {
      y: -3
    },
    visible: {
      y: 3,
      transition: {
        duration: 2000,
        repeat: Infinity,
        repeatType: 'reverse',
        delay: 350,
      }
    }
}

// v-motion="custom"
//       :initial="{ textShadow: '0 0 1px rgba(0, 0, 0, 0)'}"
//       :enter="{ textShadow: '0 0 10px rgba(200, 200, 200, 1)', 
//         transition: {
//         duration: 1000,
//         repeat: Infinity,
//         repeatType: 'reverse',
//       },}"