/********************************************************************************
 * MIT License

 * © Copyright 2026 Adobe. All rights reserved.

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 ********************************************************************************/

/**
 * Defines the tone of the translation.
 * @public
 */
export declare enum Tone {
    /**
     * Formal tone.
     */
    FORMAL = "formal",
    /**
     * Informal tone.
     */
    INFORMAL = "informal",
    /**
     * Keep the original tone.
     */
    DO_NOT_CHANGE = "doNotChange"
}

/**
 * Represents a group of messages to be translated.
 * @public
 */
export declare type TranslationItem = {
    /**
     * Unique identifier for the item.
     */
    id: string;
    /**
     * List of messages belonging to this item.
     */
    messages: TranslationMessage[];
};

/**
 * Represents a single message unit to be translated.
 * @public
 */
export declare type TranslationMessage = {
    /**
     * Unique identifier for the message.
     */
    id: string;
    /**
     * The content string to translate.
     */
    value: string;
};

/**
 * Payload for a translation request.
 * @public
 */
export declare type TranslationRequest = {
    /**
     * The source locale code.
     */
    sourceLocale: string;
    /**
     * List of target locale codes to translate into.
     */
    targetLocales: string[];
    /**
     * List of items containing messages to translate.
     */
    items: TranslationItem[];
    /**
     * Optional requested tone for the translation.
     */
    tone: Tone;
};

/**
 * Response from the translation service.
 * @public
 */
export declare type TranslationResponse = {
    /**
     * Status code of the response.
     */
    status: number;
    /**
     * Error message, if any.
     */
    error?: string | undefined;
    /**
     * Map of translation results, keyed by locale code.
     */
    results: Record<string, TranslationItem[]>;
};

export {};
