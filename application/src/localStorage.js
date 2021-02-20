class Storage {
    storeCheckboxes(checkboxes) {
        window.localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
        return checkboxes;
    }

    loadCheckboxes() {
        const found = window.localStorage.getItem('checkboxes');
        if (!found) return null;
        return JSON.parse(found);
    }
}

export default Storage;