import React from 'react'
import style from '../../styles/Card.module.css'
import Filter from '../components/filter'
import {useFilter} from '../hooks/useFilter'
const Card=()=>{
    const {activeFilter, setFilter} = useFilter()
    return(
    <section className={style.main}>
        <div className={style.div_filter}>
            <h2 className={style.h2}>Grafica de pastel</h2>
            <a className={style.a} onClick={()=>setFilter(!activeFilter)}>Filtro</a>
        </div>
        <Filter active={activeFilter}/>
        <div className={style.div_chart}>Chart</div>
    </section>
    )
}

export default Card