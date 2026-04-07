import { useState } from 'react';

function useModalController() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function toggleModal() { 
        setIsModalOpen((prev) => !prev)
    };

    return {
        isModalOpen,
        toggleModal
    };
}

export default useModalController;