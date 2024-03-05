import { useNavigate } from "react-router-dom";

const ViewDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mt-10 flex flex-col items-center text-white gap-5 px-10">
      <div className="w-full flex items-start">
        <svg
          onClick={() => navigate("/list")}
          className="cursor-pointer"
          fill="#ffffff"
          height="40px"
          width="40px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 489.3 489.3"
          xmlSpace="preserve"
        >
          <g>
            <g>
              <path
                d="M476.9,232.45H147.2l55.9-55.9c4.8-4.8,4.8-12.5,0-17.3s-12.5-4.8-17.3,0l-76.8,76.8c-4.8,4.8-4.8,12.5,0,17.3l76.8,76.8
			c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-55.9-55.9H477c6.8,0,12.3-5.5,12.3-12.3
			C489.2,237.85,483.7,232.45,476.9,232.45z"
              />
            </g>
          </g>
        </svg>
      </div>
      <span className="text-3xl font-semibold">Ticket Overview</span>
      <div className="w-full flex flex-col justify-between p-5 border rounded bg-transparent border-rgb gap-5">
        <div className="w-full flex flex-col items-start justify-between gap-3">
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm">CreatedAt</span>
              <span>12/2/2024</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm">CreatedBy</span>
              <span>testing@gmail.com</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm">Title</span>
              <span>my pc is not working</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm">Status</span>
              <span>In Progress</span>
            </div>
          </div>
          <div className="w-full flex items-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm">Description</span>
              <span className="text-center text-[#d9e8e896] text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                alias similique dolorem, aperiam harum autem saepe, sed atque
                quaerat nisi dignissimos facere eum porro blanditiis expedita
                sint labore officiis aspernatur rerum inventore. Quidem nesciunt
                rem id aliquam ipsa commodi nisi, quibusdam accusamus ad,
                explicabo labore dolorem! Iure eum esse pariatur nulla,
                blanditiis alias itaque corporis hic commodi, harum voluptas
                modi. Nihil a odit saepe, ad rem vero aliquid. Ratione delectus
                aperiam commodi quidem magnam! Officia totam dolor saepe fugiat.
                A aut repellat nostrum ex dolor aperiam reiciendis corporis
                soluta quibusdam architecto magnam hic est tenetur, sequi quae
                similique ipsa exercitationem, molestias beatae recusandae
                explicabo expedita! Esse molestias aliquam quos voluptatibus
                pariatur dolorem doloremque perspiciatis sint nobis voluptatum
                tempora, enim ipsa, adipisci, sit error impedit officiis sequi
                dolores in? Id quae quasi et, consequuntur, cum hic harum unde
                tempora perferendis nulla excepturi, vel at ut qui magni
                quibusdam adipisci pariatur? Quae quas nobis vitae nam mollitia,
                facere error asperiores perferendis, minima ad voluptatem eum
                eligendi deleniti? Quo, optio? Quas at tempora, perferendis est
                adipisci aut! In quae sed aut repellat. Quia eligendi commodi
                similique soluta ex odit error impedit asperiores?
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-between gap-2">
          <span className="text-lg border-bottom">Answers</span>
          <span className="text-lg text-[#d9e8e896]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sequi nisi vitae rerum, accusantium delectus aspernatur libero
            facere consequatur provident ea nam quasi veritatis odit minus omnis
            sit, vero distinctio inventore minima repellendus! Recusandae,
            aliquid harum hic quos beatae magnam distinctio temporibus
            cupiditate repellendus dignissimos debitis quidem fuga voluptatibus
            maiores nemo consectetur iure illo doloribus a inventore ducimus
            reprehenderit natus similique. Autem voluptatem dignissimos incidunt
            quod praesentium saepe deserunt dicta mollitia temporibus deleniti,
            aut molestiae a, veniam est illo quos, soluta voluptatum consectetur
            alias labore? Nisi nostrum, nihil voluptatibus tempore natus quia
            illo asperiores, placeat repellat debitis iusto magni velit aperiam
            deserunt provident dolor facilis, deleniti odit! Nulla sunt, culpa
            beatae molestiae at rem consequuntur recusandae tempore aliquid
            labore, dignissimos neque maiores qui earum assumenda? Nobis,
            sapiente? Nesciunt assumenda architecto similique quaerat magni
            ipsum, asperiores ipsa sed fugit esse consequatur facere debitis sit
            temporibus aliquid earum. Natus dignissimos in ab animi doloribus,
            quo voluptatem ratione quod eaque, perferendis tenetur maiores
            expedita velit tempore blanditiis omnis consequuntur saepe
            perspiciatis illo libero nostrum impedit? Cumque architecto, beatae
            temporibus neque tenetur sed vitae soluta omnis repudiandae
            excepturi sapiente blanditiis inventore, necessitatibus rerum quam
            nobis pariatur quisquam dolorem. Dignissimos repudiandae aspernatur
            exercitationem iure explicabo.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
