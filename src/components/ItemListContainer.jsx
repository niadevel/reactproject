import Swal from 'sweetalert2'

function ItemListContainer(props) {
    const {title, text} = props;
    return (
        <div className="greetings">
            <h1 className='home-title'>{title}</h1>
            <p className='home-text'>{text}</p>
        </div>
    );
}

export default ItemListContainer