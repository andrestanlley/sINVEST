import AdSense from 'react-adsense';

export default function Ads() {
    return (
        <div className='bodylimiter'>
            <AdSense.Google
                client="ca-pub-2228435789089108"
                style={{
                    display: "block",
                    width: "100%",
                    maxWidth: "var(--limiter-width)",
                    height: 300
                }}
            />
        </div>
    )
}