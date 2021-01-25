import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiCodeBoxLine } from 'react-icons/ri'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { FiDatabase } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    border-top: 1px solid #000;
` 

export const AboutMe = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-right: 1px solid #000;
    width: 45%;
    padding: 5%;
`

export const AboutLink = styled(Link)`
    font-size: 12px;
    color: #3c3c3b !important;
`

export const LanguagesWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 5%;
`
export const IconWrapper = styled.div`
    margin-left: 20%;
`

export const FrontendIcon = styled(RiCodeBoxLine)`
    
`

export const BackendIcon = styled(HiOutlineDesktopComputer)`
    
`

export const DatabaseIcon = styled(FiDatabase)`
    
`

export const Arrow = styled(BsArrowRight)`

`

export const LanguagesFrontend = styled.ul`
    display: flex;
    flex-direction: column;
`

export const LanguagesBackend = styled.ul`
    display: flex;
    flex-direction: column;
`