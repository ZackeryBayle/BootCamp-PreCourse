import { library } from "@fortawesome/fontawesome-svg-core";

import { 
    faTrash, 
    faSignOutAlt, 
    faSignInAlt, 
    faEdit, 
    faEraser,
    faSpinner, 
    faPlusCircle 
} from "@fortawesome/free-solid-svg-icons";


const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faSignInAlt, 
        faEdit, 
        faEraser, 
        faSpinner, 
        faPlusCircle
    );

}

export default Icons;