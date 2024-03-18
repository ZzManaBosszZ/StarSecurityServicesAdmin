function Custom() {
	
    return(
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas_setting" aria-labelledby="offcanvas_setting">
		<div class="offcanvas-header">
			<h5 class="offcanvas-title">Template Setting</h5>
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div class="offcanvas-body d-flex flex-column">
			<div class="mb-4">
				<h6>Set Theme Color</h6>
				<ul class="choose-skin list-unstyled mb-0">
					<li data-theme="ValenciaRed"><div style={{mytaskthemecolor: '#D63B38'}}></div></li>
					<li data-theme="SunOrange"><div style={{mytaskthemecolor: '#F7A614'}}></div></li>
					<li data-theme="AppleGreen"><div style={{mytaskthemecolor: '#5BC43A'}}></div></li>
					<li data-theme="CeruleanBlue"><div style={{mytaskthemecolor: '#00B8D6'}}></div></li>
					<li data-theme="Mariner"><div style={{mytaskthemecolor: '#0066FE'}}></div></li>
					<li data-theme="PurpleHeart" class="active"><div style={{mytaskthemecolor: '#6238B3'}}></div></li>
					<li data-theme="FrenchRose"><div style={{mytaskthemecolor: '#EB5393'}}></div></li>
				</ul>
			</div>
            <div class="mb-4 flex-grow-1">
				<h6>Set Theme Light/Dark/RTL</h6>
                <ul class="list-unstyled mb-0">
                    <li>
                        <div class="form-check form-switch theme-switch">
                            <input class="form-check-input fs-6" type="checkbox" role="switch" id="theme-switch"/>
                            <label class="form-check-label mx-2" for="theme-switch">Enable Dark Mode!</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check form-switch theme-rtl">
                            <input class="form-check-input fs-6" type="checkbox" role="switch" id="theme-rtl"/>
                            <label class="form-check-label mx-2" for="theme-rtl">Enable RTL Mode!</label>
                        </div>
                    </li>
                    <li>
                        <div class="form-check form-switch monochrome-toggle">
                            <input class="form-check-input fs-6" type="checkbox" role="switch" id="monochrome"/>
                            <label class="form-check-label mx-2" for="monochrome">Monochrome Mode</label>
                        </div>
                    </li>
                </ul>
			</div>
			
		</div>
	</div>
    );
}
export default Custom;