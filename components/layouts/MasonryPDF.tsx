import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin, } from "@react-pdf-viewer/default-layout";
import { selectionModePlugin, SelectionMode } from '@react-pdf-viewer/selection-mode';
import { isSome, none, Option, some } from "fp-ts/lib/Option";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { Modal } from "uiComponents/Modal";
import { unWrapOption } from "utils/option.utils";

const MasonryPDF: React.FC<{
	data: Array<{ name: string; link: string }>
}> = ({ data }) => {

	const defaultLayoutPluginInstance = defaultLayoutPlugin();
	const selectionModePluginInstance = selectionModePlugin();
	const { SwitchSelectionModeButton } = selectionModePluginInstance;

	const [pdfView, setPdfView] = useState<Option<{ name: string; link: string; }>>(none);
	const [pdfHeight, setPdfHeight] = useState<number>(500);

	useEffect(() => {
		fixTableHeight()
	}, [])

	const fixTableHeight = () => {
		if (document) {
			let modalTopHeight = 0
			let modalTopEl = document.querySelector('.modal-top')
			if (modalTopEl) modalTopHeight = modalTopEl.clientHeight

			let body = document.body, html = document.documentElement;
			let totalHeight = html.clientHeight - (150 + modalTopHeight)
			setPdfHeight(totalHeight)
			// console.log('height', )
			// console.log('modalTopHeight', modalTopHeight)
			// console.log(height, (topbarHeight + dmsTblTopHeight + dmsTblTheadHeight))
			// console.log(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
			/* setDmsTblHeight(some(height - (topbarHeight + dmsTblTopHeight + dmsTblTheadHeight + 50)))
			jumpToHilightSearch() */
		}
	}

	return (
		<>
			<ResponsiveMasonry
				columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}
				className="responsive-masonry"
			>
				<Masonry gutter={'15px'}>
					{data.map((i, k) => <div key={k} onClick={() => setPdfView(some(i))} >
						<div className="item p-3 bg-white d-flex justify-content-center align-items-center flex-column">
							<img src="/images/200pdf.png" alt="PDF" style={{ maxWidth: '100px' }} />
							<div className="py-3"><small>{i.name}</small></div>
						</div>
					</div>)}
				</Masonry>
			</ResponsiveMasonry>
			{isSome(pdfView) && <Modal action={() => setPdfView(none)} title={pdfView.value.name} size="xl">
				<Worker workerUrl="/js/pdf.worker-3.11.174.js">
					{/* 3.11.174 */}
					{/* https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.js 3.10.111 */}
					<div id="pdf-container" style={{ height: pdfHeight + "px" }}>
						<Viewer defaultScale={SpecialZoomLevel.PageFit} fileUrl={pdfView.value.link} plugins={[defaultLayoutPluginInstance, selectionModePluginInstance]} />
					</div>
				</Worker>
			</Modal>}
		</>
	);
};

export default MasonryPDF;
