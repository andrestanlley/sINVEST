import AdSense from 'react-adsense';

export default function Ads() {
    return (
        <div className='bodylimiter'>
            <AdSense.Google
            client='ca-pub-2228435789089108'
            slot='8257100050'
            style={{ display: "block", width: "100%" }}
            format='Display'
        />
        </div>
    )
}