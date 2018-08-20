class TouchPlugin {
	/**
	 * @param {Carousel} carousel
	 */
    constructor(carousel) {
        this.carousel = carousel
        this._addEventListener(carousel);
    }

    _addEventListener(carousel) {
        carousel._container.addEventListener('dragstart', event => event.preventDefault());
        carousel._container.addEventListener('mousedown', event => this._startDrag(event));
        carousel._container.addEventListener('touchstart', event => this._startDrag(event));

        window.addEventListener('mousemove', event => this._drag(event));
        window.addEventListener('touchmove', event => this._drag(event));
        window.addEventListener('mouseup', event => this._dragEnd(event));
        window.addEventListener('touchend', event => this._dragEnd(event));
        window.addEventListener('touchcancel', event => this._dragEnd(event));
    }

	/**
	 * Starts the placement of the touch
	 * @param {MouseEvent|TouchEvent} event
	 */
    _startDrag(event) {
        if (event.touches) {
            if (event.touches.length > 1) return;

            event = event.touches[0];
        }

        this.origin = {
            x: event.screenX,
            y: event.screenY
        }
        this.width = this.carousel.containerWidth;
        this.carousel.disableTransition();
    }

	/**
	 * Positioning
	 * @param {MouseEvent|TouchEvent} event
	 */
    _drag(event) {
        if (this.origin) {
            let point = event.touches
                ? event.touches[0]
                : event;

            let translate = {
                x: point.screenX - this.origin.x,
                y: point.screenY - this.origin.y
            }

            let base_translate = this.carousel.current_item * -100 / this.carousel.items.length;
            let translate_x = base_translate + 100 * translate.x / this.width;
            this.carousel.translate(translate_x);
            this.last_translate = translate;
        }
    }

	/**
	 * Positioning end
	 * @param {MouseEvent|TouchEvent} event
	 */
    _dragEnd(event) {
        if (this.origin && this.last_translate) {
            this.carousel.enableTransition();
            if (Math.abs(this.last_translate.x / this.carousel.carouselWidth) > 0.2) {
                if (this.last_translate.x < 0) this.carousel._next();
                else this.carousel._prev();
            } else {
                this.carousel._gotoItem(this.carousel.current_item);
            }
        }

        this.origin = null;
    }
}

export default TouchPlugin;