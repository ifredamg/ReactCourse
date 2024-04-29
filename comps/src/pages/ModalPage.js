import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>
    );

    return (
        <div className="relative">
            <Button onClick={handleClick} primary>
                Open modal
            </Button>
            {showModal && modal}

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend eget quam vitae hendrerit. 
                Curabitur aliquet orci ut ultrices dictum. Duis aliquet, est in vehicula rhoncus, libero lectus rhoncus erat, 
                sed varius risus ante vel nibh. Maecenas molestie imperdiet velit, laoreet venenatis justo lacinia ac. 
                Sed feugiat et enim non convallis. Pellentesque pellentesque rhoncus leo vel gravida. 
                Quisque ornare tortor sem, a vehicula ex convallis dictum. Donec at finibus tortor. 
                Integer aliquet massa in magna vulputate imperdiet. Integer ac mi quam.
            </p>
            <p>
                Sed viverra orci justo, sit amet tempus nisl sagittis a. Morbi placerat, ante at aliquet porttitor, 
                ligula augue mollis erat, ut convallis ex libero sit amet odio. Donec congue risus porttitor metus finibus, 
                sit amet pulvinar augue ultricies. Vestibulum dictum semper est, quis tempor erat tincidunt sed. 
                Donec condimentum dolor ex, vel dapibus augue mattis id. Donec sit amet lorem quis nisi viverra commodo vel 
                iaculis nisi. Duis rutrum erat aliquet, dictum felis id, mattis nulla. Integer elit turpis, finibus eu facilisis id, 
                pretium vitae ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet porta metus, 
                in egestas nulla tristique et. Fusce aliquet sodales lacus, vel lobortis libero scelerisque a. 
                Aenean pretium nisl ut risus luctus, vel ornare dolor vestibulum. Morbi ullamcorper tellus in tellus fermentum, 
                vel pretium lorem efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices nisi libero, 
                id faucibus elit eleifend id.
            </p>
            <p>
                Sed viverra orci justo, sit amet tempus nisl sagittis a. Morbi placerat, ante at aliquet porttitor, 
                ligula augue mollis erat, ut convallis ex libero sit amet odio. Donec congue risus porttitor metus finibus, 
                sit amet pulvinar augue ultricies. Vestibulum dictum semper est, quis tempor erat tincidunt sed. 
                Donec condimentum dolor ex, vel dapibus augue mattis id. Donec sit amet lorem quis nisi viverra commodo vel 
                iaculis nisi. Duis rutrum erat aliquet, dictum felis id, mattis nulla. Integer elit turpis, finibus eu facilisis id, 
                pretium vitae ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet porta metus, 
                in egestas nulla tristique et. Fusce aliquet sodales lacus, vel lobortis libero scelerisque a. 
                Aenean pretium nisl ut risus luctus, vel ornare dolor vestibulum. Morbi ullamcorper tellus in tellus fermentum, 
                vel pretium lorem efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices nisi libero, 
                id faucibus elit eleifend id.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend eget quam vitae hendrerit. 
                Curabitur aliquet orci ut ultrices dictum. Duis aliquet, est in vehicula rhoncus, libero lectus rhoncus erat, 
                sed varius risus ante vel nibh. Maecenas molestie imperdiet velit, laoreet venenatis justo lacinia ac. 
                Sed feugiat et enim non convallis. Pellentesque pellentesque rhoncus leo vel gravida. 
                Quisque ornare tortor sem, a vehicula ex convallis dictum. Donec at finibus tortor. 
                Integer aliquet massa in magna vulputate imperdiet. Integer ac mi quam.
            </p>
            <p>
                Sed viverra orci justo, sit amet tempus nisl sagittis a. Morbi placerat, ante at aliquet porttitor, 
                ligula augue mollis erat, ut convallis ex libero sit amet odio. Donec congue risus porttitor metus finibus, 
                sit amet pulvinar augue ultricies. Vestibulum dictum semper est, quis tempor erat tincidunt sed. 
                Donec condimentum dolor ex, vel dapibus augue mattis id. Donec sit amet lorem quis nisi viverra commodo vel 
                iaculis nisi. Duis rutrum erat aliquet, dictum felis id, mattis nulla. Integer elit turpis, finibus eu facilisis id, 
                pretium vitae ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet porta metus, 
                in egestas nulla tristique et. Fusce aliquet sodales lacus, vel lobortis libero scelerisque a. 
                Aenean pretium nisl ut risus luctus, vel ornare dolor vestibulum. Morbi ullamcorper tellus in tellus fermentum, 
                vel pretium lorem efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices nisi libero, 
                id faucibus elit eleifend id.
            </p>
            <p>
                Sed viverra orci justo, sit amet tempus nisl sagittis a. Morbi placerat, ante at aliquet porttitor, 
                ligula augue mollis erat, ut convallis ex libero sit amet odio. Donec congue risus porttitor metus finibus, 
                sit amet pulvinar augue ultricies. Vestibulum dictum semper est, quis tempor erat tincidunt sed. 
                Donec condimentum dolor ex, vel dapibus augue mattis id. Donec sit amet lorem quis nisi viverra commodo vel 
                iaculis nisi. Duis rutrum erat aliquet, dictum felis id, mattis nulla. Integer elit turpis, finibus eu facilisis id, 
                pretium vitae ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet porta metus, 
                in egestas nulla tristique et. Fusce aliquet sodales lacus, vel lobortis libero scelerisque a. 
                Aenean pretium nisl ut risus luctus, vel ornare dolor vestibulum. Morbi ullamcorper tellus in tellus fermentum, 
                vel pretium lorem efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices nisi libero, 
                id faucibus elit eleifend id.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend eget quam vitae hendrerit. 
                Curabitur aliquet orci ut ultrices dictum. Duis aliquet, est in vehicula rhoncus, libero lectus rhoncus erat, 
                sed varius risus ante vel nibh. Maecenas molestie imperdiet velit, laoreet venenatis justo lacinia ac. 
                Sed feugiat et enim non convallis. Pellentesque pellentesque rhoncus leo vel gravida. 
                Quisque ornare tortor sem, a vehicula ex convallis dictum. Donec at finibus tortor. 
                Integer aliquet massa in magna vulputate imperdiet. Integer ac mi quam.
            </p>
            <p>
                Sed viverra orci justo, sit amet tempus nisl sagittis a. Morbi placerat, ante at aliquet porttitor, 
                ligula augue mollis erat, ut convallis ex libero sit amet odio. Donec congue risus porttitor metus finibus, 
                sit amet pulvinar augue ultricies. Vestibulum dictum semper est, quis tempor erat tincidunt sed. 
                Donec condimentum dolor ex, vel dapibus augue mattis id. Donec sit amet lorem quis nisi viverra commodo vel 
                iaculis nisi. Duis rutrum erat aliquet, dictum felis id, mattis nulla. Integer elit turpis, finibus eu facilisis id, 
                pretium vitae ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet porta metus, 
                in egestas nulla tristique et. Fusce aliquet sodales lacus, vel lobortis libero scelerisque a. 
                Aenean pretium nisl ut risus luctus, vel ornare dolor vestibulum. Morbi ullamcorper tellus in tellus fermentum, 
                vel pretium lorem efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices nisi libero, 
                id faucibus elit eleifend id.
            </p>
            <p>
                Sed viverra orci justo, sit amet tempus nisl sagittis a. Morbi placerat, ante at aliquet porttitor, 
                ligula augue mollis erat, ut convallis ex libero sit amet odio. Donec congue risus porttitor metus finibus, 
                sit amet pulvinar augue ultricies. Vestibulum dictum semper est, quis tempor erat tincidunt sed. 
                Donec condimentum dolor ex, vel dapibus augue mattis id. Donec sit amet lorem quis nisi viverra commodo vel 
                iaculis nisi. Duis rutrum erat aliquet, dictum felis id, mattis nulla. Integer elit turpis, finibus eu facilisis id, 
                pretium vitae ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis imperdiet porta metus, 
                in egestas nulla tristique et. Fusce aliquet sodales lacus, vel lobortis libero scelerisque a. 
                Aenean pretium nisl ut risus luctus, vel ornare dolor vestibulum. Morbi ullamcorper tellus in tellus fermentum, 
                vel pretium lorem efficitur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices nisi libero, 
                id faucibus elit eleifend id.
            </p>
        </div>
    );
}

export default ModalPage;