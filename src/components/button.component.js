import './button.styles.scss';

const Button = (props) => {
    //reusable button components available throughout our app
    return (
        <div>
            <button {...props}></button>
        </div>
    )
}

export default Button