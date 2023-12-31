import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";
import CardCar from "../subcomponents/CardCar";
import UseFetch from "../../services/UseFetch";

import { useTranslation } from "react-i18next";
import { Button } from "antd";
function Cards() {

	const { t } = useTranslation();
	const { DATA: CARSDATA } = UseFetch(process.env.REACT_APP_API_URL + "car/");
	return (
		<div className='cards'>
			{CARSDATA != null ?
				(
					<div className='grid_container'>
						{
							CARSDATA.map((item) => (
								<CardCar key={item.id} car={item} className="grid_item"></CardCar>
							))
						}
					</div>
				) : (
					<div className='grid_container'> {t("sorryNotCar")} </div>
				)
			}

			<div className="centerElement">
				<Link
					to='/fleet'
				>
					<Button type="primary" size="large" >{t("seeAll")}</Button>


				</Link>
			</div>

		</div>
	);
}

export default Cards;
