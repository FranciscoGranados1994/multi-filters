import React from 'react'
import style from '../../styles/Filter.module.css'
const Filter = ({ active }) => {
    return (
        <div className={active ? style.main : style.main_off}>
            <div className={style.container}>
                <div className={style.div_sections}>
                    <section className={style.sections}>
                        <div className={style.div_section}>
                            <h3 className={style.h3_sectors}>Tarjetas</h3>
                        </div>
                        <div className={style.div_section}>
                            <h3 className={style.h3_sectors}>Sectores</h3>
                        </div>
                        <div className={style.div_section}>
                            <h3 className={style.h3_sectors}>Estados</h3>
                        </div>
                        <div className={style.div_section}>
                            <h3 className={style.h3_sectors}>Estatus</h3>
                        </div>
                    </section>
                    <section className={style.options}>
                        <div className={style.div_search}>
                            <input placeholder="Buscar ..." type="text" className={style.input_search}/>
                        </div>
                        <div>
                            Options
                        </div>
                    </section>
                    <section className={style.options_selected}>
                        Opciones selecionadas
                    </section>
                </div>
                <div className={style.div_button}>
                    <button className={style.button_cancel}>Cancelar</button>
                    <button className={style.button_consult}>Consultar</button>
                </div>
            </div>
        </div>
    )
}

export default Filter