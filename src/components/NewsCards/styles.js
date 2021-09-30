/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 29/09/2021 - 23:15:36
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/09/2021
 * - Author          : Michael
 * - Modification    :
 **/
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  container: {
    padding: "0 5%",
    
    width: "100%",
    margin: 0,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    
    padding: "10%",
    borderRadius: 10,
    color: "#3a3335",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    
  },
});

export default styles;
