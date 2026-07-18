import { PlanetLegend } from "@/src/components/PlanetLegend";
import { ReflectionEffects } from "@/src/components/ReflectionEffects";
import { MagneticLink } from "@/src/components/SectionSignatures";
import { Reveal } from "@/src/components/VisualEffects";

const learningChain = [
  { title: "Quản lý tệp", detail: "Tạo cấu trúc lưu trữ dễ tìm lại và xử lý dữ liệu cẩn thận hơn." },
  { title: "Chọn nguồn tin", detail: "Tìm kiếm có chiến lược, đánh giá xuất xứ và kiểm tra độ tin cậy." },
  { title: "Viết prompt", detail: "Nêu rõ vai trò, bối cảnh, mục tiêu và tiêu chí của câu trả lời." },
  { title: "Cộng tác số", detail: "Phân vai, dùng tài liệu chung và theo dõi cùng một tiến độ." },
  { title: "Biên tập nội dung", detail: "Kết hợp gợi ý của AI với lựa chọn và giọng điệu của bản thân." },
  { title: "Dùng AI có trách nhiệm", detail: "Minh bạch, kiểm chứng và giữ đóng góp cá nhân trong bài làm." },
];

const reviewSteps = [
  "Rà soát lại sáu bài nộp",
  "Chọn nội dung cần làm nổi bật",
  "Sắp xếp minh chứng theo mạch đọc",
  "Kiểm tra giao diện và tài liệu gốc",
];

const challenges = [
  {
    challenge: "Bài gốc có nhiều ảnh và chi tiết, nếu đưa hết vào một chỗ thì trang rất dài và khó theo dõi.",
    action: "Mình tóm tắt mỗi bài theo cùng một mạch: mục tiêu, bối cảnh, quá trình, kết quả và bài học; tài liệu đầy đủ được hiển thị riêng ở cuối hồ sơ.",
    result: "Người xem nắm được ý chính trước, nhưng vẫn có thể đọc và kiểm tra toàn bộ bài nộp.",
  },
  {
    challenge: "Tên bài, thứ tự, cách viết và định dạng giữa sáu tài liệu ban đầu chưa thật sự đồng nhất.",
    action: "Mình đối chiếu lại barem, sửa lỗi đánh máy, thống nhất tiêu đề và sắp xếp các phần theo một cấu trúc chung.",
    result: "Portfolio trở thành một sản phẩm liền mạch thay vì sáu tệp riêng lẻ đặt cạnh nhau.",
  },
  {
    challenge: "Hiệu ứng thị giác dễ làm phần nội dung học thuật bị chìm hoặc khiến website trở nên nặng nề.",
    action: "Mình giữ mỗi trang một hành tinh chủ đề, giảm chuyển động ở phần đọc dài và ưu tiên tương phản, khoảng trắng cùng khả năng truy cập.",
    result: "Chủ đề hệ mặt trời vẫn có bản sắc nhưng không cản trở việc đọc và đối chiếu bài làm.",
  },
];

const growth = [
  { label: "Lưu trữ", before: "Lưu theo thói quen", after: "Có cấu trúc và quy tắc đặt tên" },
  { label: "Nguồn tin", before: "Ưu tiên kết quả đầu tiên", after: "Đánh giá bằng tiêu chí rõ ràng" },
  { label: "Prompt", before: "Đặt câu hỏi ngắn và chung", after: "Có vai trò, bối cảnh và đầu ra" },
  { label: "AI", before: "Chủ yếu chú ý kết quả", after: "Kiểm chứng cả quá trình sử dụng" },
];

const nextSteps = [
  "Duy trì cách lưu trữ tài liệu có hệ thống và ghi lại quá trình làm bài.",
  "Rèn kỹ năng tìm, đọc và đối chiếu nguồn cho các môn ngoại ngữ và văn hóa.",
  "Dùng AI như công cụ hỗ trợ, luôn kiểm tra lại và tự chịu trách nhiệm với sản phẩm cuối.",
];

export default function Reflection() {
  return (
    <section className="thematic-section theme-saturn reflection-page section pt-0">
      <ReflectionEffects />
      <div className="planet-focus-hero reflection-hero">
        <div className="container planet-focus-grid">
          <div className="planet-focus-copy reflection-hero-copy">
            <p className="eyebrow">Tổng kết hành trình</p>
            <h1 className="reflection-title">Khép lại một chặng học <span>kỹ năng số.</span></h1>
            <p className="reflection-hero-lead">Trang này là khoảng lặng để mình nhìn lại điều đã làm được, những lúc còn lúng túng và cách sáu bài thực hành đã kết nối thành một phương pháp học rõ ràng hơn.</p>
            <div className="reflection-hero-stats" aria-label="Tổng quan hồ sơ">
              <div><strong>06</strong><span>bài thực hành</span></div>
              <div><strong>41</strong><span>trang minh chứng</span></div>
              <div><strong>01</strong><span>hành trình học</span></div>
            </div>
          </div>
          <div className="planet-focus-legend"><PlanetLegend /></div>
        </div>
      </div>

      <div className="container reflection-deck">
        <section className="reflection-opening" aria-labelledby="reflection-opening-title" data-reflection-reveal>
          <Reveal className="reflection-opening-main">
            <p className="reflection-kicker">Nhìn lại toàn bộ portfolio</p>
            <h2 id="reflection-opening-title">Khi ghép lại sáu bài, mình nhìn rõ hơn cách mình đã học.</h2>
            <p>Lúc từng bài còn nằm riêng trong các tệp Word, mình thường xem đó là những nhiệm vụ cần hoàn thành. Khi đưa chúng vào cùng một portfolio, mình mới nhận ra chúng tạo thành một chuỗi liên kết: tổ chức dữ liệu để làm việc rõ ràng, tìm nguồn để có căn cứ, viết prompt để giao tiếp chính xác, cộng tác để hoàn thành mục tiêu chung và sử dụng AI với sự kiểm soát của bản thân.</p>
          </Reveal>
          <Reveal className="reflection-opening-note" delay={0.1}>
            <span>6 bài · 1 hành trình</span>
            <p>Điều có giá trị nhất không chỉ là sáu sản phẩm cuối, mà là cách mỗi bài thay đổi một thói quen học tập nhỏ của mình.</p>
          </Reveal>
        </section>

        <section className="reflection-story-grid" aria-label="Quá trình và kỹ năng tích lũy" data-reflection-reveal>
          <Reveal className="reflection-process-panel">
            <p className="reflection-kicker">Quá trình xây dựng sản phẩm</p>
            <h2>Từ sáu bài nộp rời rạc đến một hồ sơ có mạch đọc.</h2>
            <p>Mình bắt đầu bằng việc đọc lại toàn bộ bài, kiểm tra tên, nội dung, ảnh minh chứng và thứ tự trình bày. Phần mất nhiều thời gian nhất là chọn cách giữ đủ chiều sâu nhưng không khiến website rối hoặc quá nặng. Quá trình này giúp mình nhìn bài làm như một sản phẩm hoàn chỉnh, chứ không chỉ là một tệp đã nộp.</p>
            <ol className="reflection-review-flow">
              {reviewSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
            </ol>
          </Reveal>

          <Reveal className="reflection-skills-panel" delay={0.1}>
            <header>
              <p className="reflection-kicker">Kỹ năng tích lũy</p>
              <h2>Mỗi bài thêm một mắt xích.</h2>
            </header>
            <ol className="reflection-skill-orbit">
              {learningChain.map((skill, index) => (
                <li key={skill.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{skill.title}</h3><p>{skill.detail}</p></div>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        <Reveal>
          <section className="reflection-challenges" aria-labelledby="reflection-challenges-title" data-reflection-reveal>
            <div className="reflection-section-heading">
              <p className="reflection-kicker">Khó khăn và cách xử lý</p>
              <h2 id="reflection-challenges-title">Không phải lúc nào cũng trôi chảy, nhưng mình học được cách gỡ từng phần.</h2>
            </div>
            <div className="reflection-challenge-table">
              <div className="reflection-challenge-labels" aria-hidden="true"><span>Thách thức</span><span>Cách mình xử lý</span><span>Điều thay đổi</span></div>
              {challenges.map((item, index) => (
                <article className="reflection-challenge-entry" key={item.challenge}>
                  <span className="reflection-challenge-index">{String(index + 1).padStart(2, "0")}</span>
                  <p>{item.challenge}</p>
                  <p>{item.action}</p>
                  <p>{item.result}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <section className="reflection-growth" aria-labelledby="reflection-growth-title" data-reflection-reveal>
          <Reveal className="reflection-growth-heading">
            <p className="reflection-kicker">Dấu hiệu tiến bộ</p>
            <h2 id="reflection-growth-title">Sự thay đổi nằm trong cách mình làm việc.</h2>
            <p>Mình chưa xem đây là những kỹ năng đã hoàn thiện. Tuy vậy, việc đối chiếu trước và sau môn học cho thấy mình đã biết đặt thêm câu hỏi trước khi dùng công cụ hoặc nộp một sản phẩm.</p>
          </Reveal>
          <Reveal className="reflection-growth-list" delay={0.1}>
            <div className="reflection-growth-labels" aria-hidden="true"><span>Trước môn học</span><span>Sau môn học</span></div>
            {growth.map((item) => (
              <article key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.before}</p>
                <p>{item.after}</p>
              </article>
            ))}
          </Reveal>
        </section>

        <section className="reflection-forward" aria-label="Định hướng tiếp theo và bài học lớn nhất" data-reflection-reveal>
          <Reveal className="reflection-forward-main">
            <p className="reflection-kicker">Định hướng tiếp theo</p>
            <h2>Tiếp tục rèn những thói quen có thể đi cùng mình lâu dài.</h2>
            <p>Sau portfolio này, mình muốn đưa quy trình tìm và đánh giá nguồn vào các bài nghiên cứu về ngôn ngữ và văn hóa Nga, tổ chức tài liệu học ngoại ngữ dễ tra cứu hơn, đồng thời sử dụng AI minh bạch và có giới hạn rõ ràng.</p>
            <ol>
              {nextSteps.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </Reveal>
          <Reveal className="reflection-lesson" delay={0.1}>
            <p className="reflection-kicker">Điều mình rút ra</p>
            <blockquote>“Một sản phẩm học tập tốt không chỉ đủ yêu cầu. Nó còn cho thấy mình hiểu, sắp xếp và chịu trách nhiệm với điều đã trình bày.”</blockquote>
            <p>Đây là điều mình cảm nhận rõ nhất sau khi hoàn thiện website này.</p>
          </Reveal>
        </section>

        <Reveal>
          <section className="reflection-finale" aria-labelledby="reflection-finale-title" data-reflection-reveal>
            <div className="reflection-finale-orbit" aria-hidden="true"><i /><i /><i /></div>
            <div>
              <p className="reflection-kicker">Dấu mốc cuối</p>
              <h2 id="reflection-finale-title">Một nơi lưu lại bài làm, một dấu mốc để nhìn lại cách mình tiến bộ.</h2>
              <p>Portfolio này chỉ là một chặng nhỏ, nhưng nó giúp mình hiểu kỹ năng số không phải những thao tác tách rời. Đó là tập hợp của nhiều thói quen làm việc cẩn thận, biết chọn lọc, biết tự đánh giá và biết chịu trách nhiệm với sản phẩm cuối cùng.</p>
            </div>
            <MagneticLink href="/projects" className="btn-primary">Xem lại sáu hồ sơ bài tập</MagneticLink>
          </section>
        </Reveal>
      </div>
    </section>
  );
}
