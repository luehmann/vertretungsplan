const checkDevicePixelRatio = () => {
	document.documentElement.style.setProperty(
		'--device-pixel-ratio',
		window.devicePixelRatio.toString()
	)
}

export { checkDevicePixelRatio }
