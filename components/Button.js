export default function Button({title, handler}) {
    return (
        <div className="container"
             onClick={handler}
             onTouchStart={handler}
             onTouchEnd={event => event.preventDefault()}
        >
            {title}
            <style jsx>{`
                .container {
                    background-color: white;
                    border: 1px solid gray;
                    font-size: 3em;
                }
            `}</style>
        </div>
    );
}