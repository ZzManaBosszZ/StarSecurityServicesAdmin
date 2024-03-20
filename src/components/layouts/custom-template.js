function Custom() {
	
    return(
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvas_setting" aria-labelledby="offcanvas_setting">
		<div className="offcanvas-header">
			<h5 className="offcanvas-title">Template Setting</h5>
			<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div className="offcanvas-body d-flex flex-column">
			<div className="mb-4">
				<h6>Set Theme Color</h6>
				<ul className="choose-skin list-unstyled mb-0">
					<li data-theme="ValenciaRed"><div style={{mytaskthemecolor: '#D63B38'}}></div></li>
					<li data-theme="SunOrange"><div style={{mytaskthemecolor: '#F7A614'}}></div></li>
					<li data-theme="AppleGreen"><div style={{mytaskthemecolor: '#5BC43A'}}></div></li>
					<li data-theme="CeruleanBlue"><div style={{mytaskthemecolor: '#00B8D6'}}></div></li>
					<li data-theme="Mariner"><div style={{mytaskthemecolor: '#0066FE'}}></div></li>
					<li data-theme="PurpleHeart" className="active"><div style={{mytaskthemecolor: '#6238B3'}}></div></li>
					<li data-theme="FrenchRose"><div style={{mytaskthemecolor: '#EB5393'}}></div></li>
				</ul>
			</div>
            <div className="mb-4 flex-grow-1">
				<h6>Set Theme Light/Dark/RTL</h6>
                <ul className="list-unstyled mb-0">
                    <li>
                        <div className="form-check form-switch theme-switch">
                            <input className="form-check-input fs-6" type="checkbox" role="switch" id="theme-switch"/>
                            <label className="form-check-label mx-2" for="theme-switch">Enable Dark Mode!</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check form-switch theme-rtl">
                            <input className="form-check-input fs-6" type="checkbox" role="switch" id="theme-rtl"/>
                            <label className="form-check-label mx-2" for="theme-rtl">Enable RTL Mode!</label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check form-switch monochrome-toggle">
                            <input className="form-check-input fs-6" type="checkbox" role="switch" id="monochrome"/>
                            <label className="form-check-label mx-2" for="monochrome">Monochrome Mode</label>
                        </div>
                    </li>
                </ul>
			</div>
			
		</div>
	</div>
    );
}
export default Custom;