import { HIDDEN } from "../constants/classNames";
import { Logger } from "../constants/enums";

type CommonElementIdType<T extends boolean> = T extends true
  ? HTMLElement
  : undefined;

export class Common<T extends boolean = false> {
  protected elementId: CommonElementIdType<T>;

  protected constructor(
    ...elementId: T extends true ? [string] : [undefined?]
  ) {
    this.elementId = this.getElementId(elementId);
  }

  protected bindElementById(elementToFindById: string): HTMLElement {
    const element = this.getElementById(elementToFindById);
    if (!element) {
      throw new Error(`Nie znaleziono elementu ${elementToFindById}`);
    }
    return element;
  }

  protected bindElementByClass(elementToFindByClass: string): HTMLElement {
    const element = this.querySelector("." + elementToFindByClass);
    if (!element) {
      throw new Error(`Nie znaleziono elementu ${elementToFindByClass}`);
    }
    return element;
  }

  protected bindElementByClassNoError(
    elementToFindByClass: string
  ): HTMLElement | null {
    return this.querySelector("." + elementToFindByClass);
  }

  protected changeVisbilityOfGivenElement(
    element: HTMLElement,
    flag: boolean
  ): void {
    element?.classList.toggle(HIDDEN, !flag);
  }

  protected bindMultipleElements(elementsTobBind: string): NodeListOf<Element> {
    const elements = this.querySelectorAll("." + elementsTobBind);
    if (!elements) {
      throw new Error(`Nie znaleziono elementu ${elementsTobBind}`);
    }
    return elements;
  }

  protected displayMessageAtTheTopOfTheScreen(message: string, status: Logger) {
    if (status > 2 || status < 0) {
      throw new Error(
        "Nieprawidłowy status wiadomości, wprowadź wartości z enuma Errors"
      );
    }

    const messageNode = this.bindElementByClass("MESSAGE");

    this.setStyleBasedOnStatus(messageNode, status);
    this.changeVisbilityOfGivenElement(messageNode, true);
    setTimeout(() => {
      this.changeVisbilityOfGivenElement(messageNode, false);
    }, 1500);
    messageNode.textContent = message;
  }

  // Private methods below...

  private getElementId(
    elementId: [string] | [undefined?]
  ): CommonElementIdType<T> {
    if (elementId && elementId[0]) {
      return this.bindElementById(elementId[0]) as CommonElementIdType<T>;
    } else {
      return undefined as CommonElementIdType<T>;
    }
  }

  private getElementById(elementToFindById: string): HTMLElement | null {
    return document.getElementById(elementToFindById);
  }

  private querySelector(selector: string): HTMLElement | null {
    return document.documentElement.querySelector(selector);
  }

  private querySelectorAll(selector: string): NodeListOf<Element> {
    return document.querySelectorAll(selector);
  }

  private setStyleBasedOnStatus(messageNode: HTMLElement, status: Logger) {
    switch (status) {
      case Logger.Error:
        messageNode.style.color = "red";
        break;
      case Logger.Message:
        messageNode.style.color = "green";
        break;
      case Logger.Warn:
        messageNode.style.color = "orange";
        break;
    }
  }
}
