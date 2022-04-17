import { LoadingDiv } from './styles'

export default function Loading() {
    return (
        <div className='bodylimiter'>
            <LoadingDiv>
                <div className='lds-ellipsis'><div></div><div></div><div></div><div></div></div>
            </LoadingDiv>
        </div>
    )
}