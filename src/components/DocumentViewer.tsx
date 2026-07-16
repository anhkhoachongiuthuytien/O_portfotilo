import { Download, Expand, FileText } from "lucide-react";
import type { ProjectDocument } from "@/src/data/portfolio";

export function DocumentViewer({ document, title }: { document: ProjectDocument; title: string }) {
  return (
    <div className="document-viewer card-shell">
      <div className="document-viewer-core card-core">
        <header className="document-viewer-header">
          <div className="document-viewer-identity">
            <span className="document-viewer-icon" aria-hidden="true"><FileText size={19} strokeWidth={1.5} /></span>
            <div>
              <p className="document-viewer-kicker">Bài nộp gốc · {document.pages} trang</p>
              <h3>{document.fileName}</h3>
            </div>
          </div>
          <div className="document-viewer-actions">
            <a href={document.pdfUrl} target="_blank" rel="noopener noreferrer" className="document-action" aria-label={`Mở toàn màn hình bài ${title}`}>
              <Expand size={15} strokeWidth={1.5} />
              <span>Mở toàn màn hình</span>
            </a>
            <a href={document.docxUrl} download className="document-action" aria-label={`Tải file Word của bài ${title}`}>
              <Download size={15} strokeWidth={1.5} />
              <span>Tải bản Word</span>
            </a>
          </div>
        </header>

        <div className="document-viewer-frame">
          <iframe
            src={`${document.pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
            title={`Tài liệu đầy đủ: ${title}`}
            loading="lazy"
          />
        </div>

        <p className="document-viewer-note">
          Tài liệu được chuyển từ Word sang PDF để hiển thị ổn định ngay trong trang. Nếu trình duyệt không hỗ trợ xem PDF, hãy dùng nút mở toàn màn hình hoặc tải bản Word.
        </p>
      </div>
    </div>
  );
}
