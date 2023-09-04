import Content from "./Content";
import Header from "./Header";
// import useNavigate from "../hooks/useNavigate";

const DefaultLayout = () => {
//   const {navigateTo} = useNavigate()
//   useLayoutEffect(() => {
//     if (!isAuthenticated()) {
//       navigateTo(ROUTES.LOGIN)
//     }
//   }, []);
  return (
    <Header>
      <Content />
    </Header>
  );
};

export default DefaultLayout;
