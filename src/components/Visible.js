

export default function Visible({ show, children }) {
    if(!show) {
        return;
    }

    return children;
}