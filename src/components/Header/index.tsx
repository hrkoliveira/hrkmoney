import logoImg from '../../assets/logo.svg'
import { Conteiner, Content } from './styles'

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

  return (
    <Conteiner>
      <Content>
      <img src={logoImg} alt="hrk money" />
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova transação
      </button>

      </Content>
    </Conteiner>
  )
}