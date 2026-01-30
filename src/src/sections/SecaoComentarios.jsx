import styles from './modules/SecaoComentarios.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Importa os estilos do Swiper
import 'swiper/css';
import 'swiper/css/pagination';

import Comentario from "./components/Comentario";
import estrelas4 from "./images/estrela4.png"
import estrelas5 from "./images/estrela5.png"


function SecaoComentarios(){
    return (
        <div className={styles.ContainerPai}>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30} // Espaço entre os cards
                slidesPerView={3} // Quantos cards aparecem (PC)
                // pagination={{ clickable: true }} // Pontinhos em baixo
                autoplay={{ delay: 3000 }} // Passa sozinho a cada 3s
                breakpoints={{
                    // Quando a tela for <= 768px (Telemóvel)
                    0: {
                        slidesPerView: 1,
                    },
                    // Quando a tela for <= 1100px (Tablet)
                    769: {
                        slidesPerView: 2,
                    },
                    // Quando a tela for Desktop
                    1100: {
                        slidesPerView: 3,
                    }
                }}
                className={styles.MinhaSwiper}
            >
                <SwiperSlide>
                    <Comentario nome="Michael Anderson" avaliacao={estrelas4} comentario="I thought TrainWell was just about workouts, but it goes far beyond that. The balance between training, nutrition, and mindset made a real difference in my daily life." />
                </SwiperSlide>
                <SwiperSlide>
                    <Comentario nome="Sarah Mitchell" avaliacao={estrelas5} comentario="What I like most is how realistic their approach is. They adapt everything to your routine, not the other way around. It finally feels sustainable." />
                </SwiperSlide>
                <SwiperSlide>
                    <Comentario nome="Carla S." avaliacao={estrelas4} comentario="TrainWell helped me see health as a long term investment, not just a short term goal. I feel stronger, more focused, and more confident." />
                </SwiperSlide>
                <SwiperSlide>
                    <Comentario nome="Emily Carter" avaliacao={estrelas5} comentario="I’ve tried many programs before, but this was the first time I felt truly supported. It’s not just about physical results, it’s about building better habits" />
                </SwiperSlide>
                <SwiperSlide>
                    <Comentario nome="Jason Miller" avaliacao={estrelas5} comentario="The personalized guidance is what sets TrainWell apart. Training, nutrition, and mental health all working together changed the way I take care of myself." />
                </SwiperSlide>

                {/* Adiciona mais SwiperSlide para o carrossel ter o que mostrar ao rodar */}
            </Swiper>
        </div>
    )
} export default SecaoComentarios;