import { ContactSection, PortfolioSection, SkillsSection, WelcomeSection } from "../../components"
import { MainLayout } from "../../layouts"

const HomePage = () => {
  return (
    <MainLayout>
      <WelcomeSection></WelcomeSection>
      <SkillsSection></SkillsSection>
      <PortfolioSection></PortfolioSection>
      <ContactSection></ContactSection>
    </MainLayout>
  )
}

export default HomePage