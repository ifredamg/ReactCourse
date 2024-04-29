import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames('text-blue-500', 'mb-3', className,
        currentPath == to && activeClassName
    );

    const handleClick = (event) => {
        if(event.metaKey || event.ctrlKey) { //Se o utilizador fizer CTRL+CLICK para abrir num novo separador, deve funcionar conforme o padrão
            //MetaKey é usado no MacOS
            //CtrlKey é usado no Windows
            return;
        }
        event.preventDefault();

        navigate(to);
    }

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;