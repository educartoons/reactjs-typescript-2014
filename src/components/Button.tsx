interface IButton {
  text: string;
}

function Button(props: IButton) {
            return <button>{props.text}</button>;
}

export { Button };
