import AuthService from "../../services/auth-service";

const DeleteProduct = async(props) => {
    try {
        console.log('idddd',props.id)
      await AuthService.adminDeleteProduct(props.id).then(
        () => {
            console.log("successss");
        //   navigate("/dashboard");
          window.location.reload();
        },
        (error) => {
          console.log("o",error);
        }
      );
    } catch (err) {
      console.log("str",err);
    }
}
export default DeleteProduct;