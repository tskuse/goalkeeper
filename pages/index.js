import ScoreBoard from '../components/ScoreBoard';

export default function Index() {
    return (
        <div className="container">
            <h1>Goalkeeper</h1>
            <ScoreBoard />
            <style jsx>{`
                h1 {
                    color: lightgray;
                    font-size: 2em;
                    font-family: Sans;
                }
                div.container {
                    text-align: center;
                }
            `}</style>
            <style jsx global>{`
                body {
                    background-color: black;
                }
            `}</style>
        </div>
    );
}