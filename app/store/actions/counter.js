export const INCR = "INCR"
export const DECR = "DECR"
export const RESET = "RESET"

export const incr = () => ({
    type: INCR
})

export const decr = () => ({
    type: DECR
})

export const reset = () => ({
    type: RESET
})
