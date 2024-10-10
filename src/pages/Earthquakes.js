import Header from "../components/Header";
import mainTable from "../img/main-table.png";
import searchTable from "../img/search-table.png";
import addReport from "../img/add-report-form.png";

export default function Earthquakes() {
    return(
        <div>
            <Header />
            <div className="grid grid-cols-2">
                <p>
                    I built this project during the second year of my college course.
                    It's a simple web application, that uses pure HTML, CSS and JavaScript
                    to handle the front end side of the service. The back end on the other side
                    is made with Express.js.

                    In this tool you can view, add, delete or modify a list of earthquakes reports
                    that took place over the years in the italian territory and near regions.
                    You can see a bunch of simple data about any report. 
                </p>
                <div className="content-center">
                    <img src="" alt="earthquakes-site-image" />
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="content-center scale-90">
                    <img src={mainTable} alt="main-table-image"/>
                </div>
                <p>
                    As you can see in the image on the left, you can scroll all the earthquakes reports
                    in a table, or look for specific reports in the following forms.
                </p>
            </div>
            <div className="grid grid-cols-2">
                <p>
                    As you can see in the image on the left, you can scroll all the earthquakes reports
                    in a table, or look for specific reports in the following forms.
                </p>
                <div className="content-center scale-90">
                    <img src={searchTable} alt="forms-image" />
                </div>
            </div>
        </div>
    );
}