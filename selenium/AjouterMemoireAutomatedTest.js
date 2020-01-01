
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Test Ajouter mémoire', function() {
  this.timeout(30000)
  var driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  async function AjouterMem() {
    await driver.get("http://localhost:3000/")
    await driver.findElement(By.css(".Login")).click()
    await driver.findElement(By.name("userName")).click()
    await driver.findElement(By.name("userName")).sendKeys("badido")
    await driver.findElement(By.name("passwd")).sendKeys("1234")
    await driver.findElement(By.css(".But")).click()
    await driver.findElement(By.linkText("Ajouter un mémoire")).click()
    await driver.findElement(By.name("titre")).click()
    await driver.findElement(By.name("titre")).sendKeys("memoire 1")
    await driver.findElement(By.name("branche")).sendKeys("SIL")
    await driver.findElement(By.css("input:nth-child(5)")).sendKeys("application de VTC")
    await driver.findElement(By.name("promoteurs")).sendKeys("Yassir")
    await driver.findElement(By.name("encadreurs")).sendKeys("Mme Oufaida")
    await driver.findElement(By.name("etudiants")).sendKeys("Boudis, Meridja")
    await driver.findElement(By.name("links")).sendKeys("yassir.io")
    const element = await driver.findElement(By.css("button:nth-child(2)"))
    await driver.findElement(By.css("button:nth-child(2)")).click()
  }
  it('Ajouter memoire', async function() {
    AjouterMem()
  })
})
