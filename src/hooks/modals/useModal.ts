import { globalSlice, modalsType } from "@/store/global/globalSlice";
import { useAppDispatch, useAppSelector } from "../redux";

export const useModal = (type: modalsType) => {
  const { modals } = useAppSelector((state) => state.globalSlice);
  const { toggleModal, setIsOpenModal, setIsCloseModal, setIsStateModal } =
    globalSlice.actions;
  const dispatch = useAppDispatch();

  const toggleModalFunction = (typeProps?: modalsType) =>
    dispatch(toggleModal(typeProps || type));
  const setIsOpenModalFunction = (typeProps?: modalsType) =>
    dispatch(setIsOpenModal(typeProps || type));
  const setIsCloseModalFunction = (typeProps?: modalsType) =>
    dispatch(setIsCloseModal(typeProps || type));
  const setIsStateModalFunction = (state: boolean, typeProps?: modalsType) =>
    dispatch(setIsStateModal({ type: typeProps || type, state }));

  return {
    status: modals[type],
    toggleModal: toggleModalFunction,
    setIsOpenModal: setIsOpenModalFunction,
    setIsCloseModal: setIsCloseModalFunction,
    setIsStateModal: setIsStateModalFunction,
  };
};
