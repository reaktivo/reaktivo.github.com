var iPhoneDemo = new Class({
  
  Implements: [Options],
  
  el: null,
  view: null,
  images: null,
  curImage: 0,
  fx: null,
  
  options: {
    auto: true,
    delay: 3000,
    view: '.view_container',
    mask: '.screen_mask',
    fx: {
      duration: 750,
      transition: 'sine:out'
    }
  },
    
  initialize: function(el, options) {
    
    this.setOptions(options);
    this.el = el;
    this.view = this.el.getElement(this.options.view);
    this.images = this.view.getChildren();
    this.fx = new Fx.Tween(this.view, this.options.fx);
    
    // Reset styles on each image
    this.images.each(this.resetImageStyles);
    
    // Set view width
    this.view.setStyles({
      width: this.images.map(this.getImageWidth).sum()
    });
    
    if(this.options.auto) {
      this.nextImage.periodical(this.options.delay, this);
    }
  },
  
  resetImageStyles: function(el) {
    el.setStyles({
      margin: 0,
      padding: 0,
      'float': 'left'
    });
  },
  
  getImageWidth: function(el) {
    return el.getSize().x
  },
  
  nextImage: function() {
    this.curImage ++;
    if(this.curImage >= this.images.length) {
      this.curImage = 0;
    }
    
    // Get image position relative to the view container's position
    var x = this.images[this.curImage].getPosition(this.view).x;
    
    this.fx.start('margin-left', -x); 
    
  }
  
});