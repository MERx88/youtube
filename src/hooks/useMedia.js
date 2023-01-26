import { useMediaQuery } from "react-responsive"

export const useMaxWide=()=>{

    const isMaxWide = useMediaQuery({
        query : "(min-width:1400px)"
    });

    return isMaxWide
}

export const useWide=()=>{

    const isWide = useMediaQuery({
        query : "(min-width:1200px)"
    });

    return isWide
}

export const useNomal=()=>{

    const isNomal = useMediaQuery({
        query : "(min-width:1000px)"
    });

    return isNomal
}

export const useNarrow=()=>{

    const isNarrow = useMediaQuery({
        query : "(min-width:790px)"
    });

    return isNarrow
}

export const useMaxNarrow=()=>{

    const isMaxNarrow = useMediaQuery({
        query : "(min-width:660px)"
    });

    return isMaxNarrow
}

