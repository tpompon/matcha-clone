import React from "react"

const styles = {
    popup: {
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    popupInner: {
        position: "absolute",
        left: "25%",
        bottom: "25%",
        top: "25%",
        right: "25%",
        margin: "auto",
        background: "white",
    },
}

const Modal = (props) => (
	<div style={ styles.popup }>
		<div style={ styles.popupInner }>
			{ props.children }
		</div>
	</div>
)

export default Modal
