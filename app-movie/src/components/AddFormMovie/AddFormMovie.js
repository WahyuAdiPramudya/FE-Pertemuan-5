import style from "./AddFormMovie.module.css";

function AddFormMovie() {
    return (
        <div className={style.container}>
            <section className={style.addformmovie}>
                <div className={style.addformmovie__left}>
                    <img className={style.addformmovie__image} src="https://picsum.photos/400/400" alt="placeholder"/>
                </div>
                <div className={style.addformmovie__right}>
                    <h2 className={style.addformmovie__title}>Form Add Movie</h2>
                    <form>
                        <label className={style.addformmovie__add_form_title}>Title</label>
                        <input type="text" name="title" />
                        <label className={style.addformmovie__add_form_date}>Date Movie</label>
                        <input type="text" name="date_movie" />
                    </form>
                    <button className={style.addformmovie__button}>Save</button>
                </div>
            </section>
        </div>
    );
}

export default AddFormMovie;