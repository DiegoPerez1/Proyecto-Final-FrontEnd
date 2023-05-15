
import "../Styles/Dropdown.css";
import Select from 'react-select';

const options = [
    { value: "", label: "Actividad" },
    { value: "opcion1", label: "Ejercicio Físico" },
    { value: "opcion2", label: "Limpieza" },
    { value: "opcion3", label: "Celebración" },
    { value: "opcion4", label: "Dormir" },
    { value: "opcion5", label: "Meditar" },
    { value: "opcion6", label: "Social" },
    { value: "opcion7", label: "Estudiar" },
    { value: "opcion8", label: "Relajación" },
    { value: "opcion9", label: "Viajando" },
];

// const customStyles = {
//     control: (provided, state) => ({
//         ...provided,
//         fontSize: '16px',
//         padding: '5px',
//         height: '40px',
//         border: `2px solid ${state.isDisabled ? 'black' : 'black'}`,
//         borderRadius: '0px 16px',
//         width: '300px',
//         marginLeft: '35px',
//         zIndex: '10',
//         overflow: 'visible',
//         color: 'grey',
//         cursor: 'pointer',
//         ':hover': {
//             borderColor: '#FFA500',
//         },
//     }),
//     menu: (provided, state) => ({
//         ...provided,
//         border: '2px solid #26262e',
//         borderRadius: '0px 16px',
//         width: '300px',
//         marginLeft: '35px',
//         height: 'fit-content',
//         overflow: 'hidden',
//     }),
//     singleValue: (provided, state) => ({
//         ...provided,
//         color: 'black',
//         fontSize: '16px',
//         marginBottom: '5px',
//     }),
//     option: (provided, state) => ({
//         ...provided,
//         borderBottom: '1px solid #26262e',
//         overflow: 'visible',
//         borderTop: 'none',
//         cursor: 'pointer',
//     }),
//     placeholder: (provided, state) => ({
//         ...provided,
//         color: 'lightgrey',
//         fontSize: '16px',
//         marginBottom: '5px',
//     }),
//     dropdownIndicator: (provided, state) => ({
//         ...provided,
//         color: '#000',
//     }),
// };

function Dropdown(props) {
    const { titulo, placeholder, handleChange } = props;


    return (
        <div id='contenedorInput'>
            <h1>{titulo}</h1>
            <Select
                options={options}
                styles={customStyles}
                placeholder={placeholder}
                onChange={(selectedOption) => handleChange(selectedOption)} />
        </div>
    );
}

export default Dropdown;
