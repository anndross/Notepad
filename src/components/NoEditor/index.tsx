export const NoEditor = () => {
  return (
    <div className="h-full w-full flex items-center gap-7 justify-center flex-col">
      <span className="text-slate-800 font-semibold text-lg">Não há lista de afazeres</span>
      <img src="assets/emptyFolder.png" alt="lista/pasta vazia" width={200} />
    </div>
  )
}